const express = require('express');

const primeService = require('../services/prime-numbers.service');

const router = express.Router();

router.post('/primes', (req, res) => {
    try {
        const { initialNumber } = req.body;
        if (!initialNumber || isNaN(initialNumber) || initialNumber < 2) {
            res.status(400).json({
                status: false,
                message: 'La llamada al servicio debe contener la variable initialNumber y esta debe ser un número mayor o igual a 2.',
            });
        } else {
            const responseService = primeService.getPrimeNumbers(initialNumber);
            console.log(`Números primos en orden descendente comenzando desde el número ${initialNumber}: ${responseService.join(', ')}.`);
            res.status(200).json({
                status: true,
                message: 'OK',
                primeNumbers: responseService.join(', '),
            });
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            message: 'Hubo un error en el proceso. Intente de nuevo más tarde.'
        });
    }
});

module.exports = router;