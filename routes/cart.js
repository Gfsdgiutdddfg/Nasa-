const express = require('express');
const router = express.Router();

// Sample cart data
let cart = [];

// GET all items in the cart
router.get('/', (req, res) => {
    res.json(cart);
});

// POST item to the cart
router.post('/', (req, res) => {
    const item = req.body;
    if (!item.id || !item.name || !item.price) {
        return res.status(400).send('Item must have id, name, and price.');
    }
    cart.push(item);
    res.status(201).json(item);
});

// DELETE item from the cart
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    cart = cart.filter(item => item.id !== itemId);
    res.status(204).send();
});

module.exports = router;
