const { User } = require('../models/UserModel')
const jwt = require('jsonwebtoken');

const userTokens = {};

class UserController {

    async createUser(req, res) {
        try {
            const { name, password } = req.body;

            const newUser = await User.create({
                name,
                password,
                role: 0
            });

            return res.json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка при создании категории' });
        }
    }

    

    async loginUser(req, res) {
        try {
            const { name, password } = req.body;

            // Проверяем, существует ли пользователь с указанным именем и паролем
            const user = await User.findOne({ where :{name: name} });

            if (!user) {
                return res.status(401).json({ error: 'Неверные учетные данные' });
            } 

            if (user.password !== password) {
                return res.status(401).json({ error: 'Неверные учетные данные' });
            }   

            // Удаляем старый токен, если он существует
            if (userTokens[user.id]) {
                delete userTokens[user.id];
            }

            // Создаем JWT токен
            const token = jwt.sign({ userId: user.id }, 'FAQ4TWHEBFDS@#', { expiresIn: '1h' });

            // Сохраняем новый токен
            userTokens[user.id] = token;

            return res.json({ user, token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка при аутентификации' });
        }
    }

    async protectedRoute(req, res) {
        try {
            // Ваш мидлвар для проверки наличия токена в заголовке запроса
            const token = req.headers.authorization.split(' ')[1];
            
            if (!token) {
                return res.status(401).json({ error: 'Токен отсутствует' });
            }

            const decodedToken = jwt.verify(token, 'FAQ4TWHEBFDS@#');

            const user = await User.findOne({where : {id: decodedToken.userId}});


            return res.json({ message: 'Действие выполнено успешно', user, decodedToken });
        } catch (error) {
            console.error(error);
            return res.status(401).json({ error: 'Неверный токен' });
        }
    }
    
}

module.exports = new UserController()
