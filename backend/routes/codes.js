const express = require('express');
const router = express.Router();
const Code = require('../models/Code');
const { authenticateToken } = require('../middleware/auth');

// Get all active codes
router.get('/', async (req, res) => {
  try {
    const codes = await Code.find({ active: true }).sort({ createdAt: -1 });
    res.json(codes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single code
router.get('/:id', async (req, res) => {
  try {
    const code = await Code.findById(req.params.id);
    if (!code) return res.status(404).json({ error: 'Code not found' });
    res.json(code);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new code (admin only)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { code, reward, description, expiryDate } = req.body;

    const newCode = new Code({
      code,
      reward,
      description,
      expiryDate,
      active: true,
    });

    await newCode.save();
    res.status(201).json(newCode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update code (admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const code = await Code.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!code) return res.status(404).json({ error: 'Code not found' });
    res.json(code);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete code (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const code = await Code.findByIdAndDelete(req.params.id);
    if (!code) return res.status(404).json({ error: 'Code not found' });
    res.json({ message: 'Code deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
