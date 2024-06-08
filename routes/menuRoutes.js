const express = require('express');
const { getMenuById } = require('../controllers/menuController');
const router = express.Router();

/**
 * @swagger
 * /menu/id/{id}:
 *   get:
 *     summary: Get a menu item by ID
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu item ID
 *     responses:
 *       200:
 *         description: The menu item description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       404:
 *         description: Menu item not found
 *       500:
 *         description: Server error
 */
router.get('/menu/id/:id', getMenuById);

module.exports = router;
