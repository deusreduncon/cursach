const { User, Claim } = require('../models/UserModel')

class ClaimController {

    async createClaim(req, res) {
        try {
            const { nameUser,name, text, pick, userId } = req.body;

            const newUser = await Claim.create({
                nameUser,
                name,
                text,
                pick,
                trim: 1,
                userId
            });

            return res.json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибкa' });
        }
    }

    async getAll(req, res) {
        try {
            const claim = await Claim.findAll({
                 order: [
                    ['id', 'ASC'],
                ],
            });

            return res.json(claim);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибкa' });
        }
    }

    async getUserClaim(req, res) {
        try {
            const { userId } = req.query;
    
        const claims = await Claim.findAll({
            where: {
                userId: userId
            }
        });

            return res.json(claims);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибкa' });
        }
    }

    async getClaimId(req, res) {
        try {
            const { id } = req.query;
    
        const claims = await Claim.findOne({
            where: {
                id: id
            }
        });

            return res.json(claims);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибкa' });
        }
    }

    async changeTrim(req, res) {
        try {
            const { claimId, trimNumber, executor, answer  } = req.body;

            // Находим категорию по ID
            const claim = await Claim.findByPk(claimId);

            if (!claim) {
                return res.status(404).json({ error: 'не найден' });
            }

            const sortOrder = claim.sortOrder;

            claim.trim = trimNumber;
            claim.executor = executor;
            claim.answer = answer;

            claim.sortOrder = sortOrder;

            await claim.save();

            return res.status(200).json({ succes: `Успех` });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async deleteClaim(req, res) {
        try {
            const { claimId } = req.body;

            // Находим категорию по ID
            const claim = await Claim.findByPk(claimId);

            if (!claim) {
                return res.status(404).json({ error: 'не найден' });
            }

            await claim.destroy();

            return res.status(200).json({ succes: `Успех` });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    }
    
}

module.exports = new ClaimController()
