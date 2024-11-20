const fs = require('fs');
const path = require('path');

const structure = {
    client: {
        public: ['index.html', 'favicon.ico', 'manifest.json'],
        src: {
            assets: {
                images: [],
                icons: [],
                styles: ['global.css'],
            },
            components: {
                Common: ['Header.jsx', 'Footer.jsx', 'Loader.jsx'],
                User: ['Dashboard.jsx', 'Profile.jsx'],
                Chef: ['Dashboard.jsx', 'Profile.jsx'],
            },
            features: {
                Booking: ['BookingForm.jsx', 'BookingList.jsx', 'BookingSlice.js'],
                Chat: ['ChatWindow.jsx', 'ChatSlice.js', 'MessageBubble.jsx'],
                Recommendation: ['RecommendationList.jsx', 'RecommendationSlice.js', 'Filters.jsx'],
            },
            pages: ['Home.jsx', 'About.jsx', 'Login.jsx', 'Signup.jsx'],
        },
    },
    server: {
        config: ['db.js', 'jwt.js', 'payment.js'],
        controllers: [
            'authController.js',
            'bookingController.js',
            'chefController.js',
            'recommendationController.js',
            'userController.js',
        ],
        middleware: ['authMiddleware.js', 'errorMiddleware.js', 'logger.js'],
        models: ['Booking.js', 'Chef.js', 'Recommendation.js', 'User.js'],
        routes: [
            'authRoutes.js',
            'bookingRoutes.js',
            'chefRoutes.js',
            'recommendationRoutes.js',
            'userRoutes.js',
        ],
        utils: ['emailService.js', 'socketService.js', 'paymentGateway.js'],
        views: {
            emailTemplates: ['bookingConfirmation.ejs'],
            main: ['errorPage.ejs'],
        },
    },
    tests: {
        unit: ['user.test.js', 'chef.test.js', 'booking.test.js'],
        integration: [
            'auth.integration.test.js',
            'recommendation.integration.test.js',
            'payment.integration.test.js',
        ],
        e2e: ['login.e2e.test.js', 'booking.e2e.test.js', 'dashboard.e2e.test.js'],
    },
};

const createStructure = (base, obj) => {
    Object.entries(obj).forEach(([key, value]) => {
        const dirPath = path.join(base, key);
        fs.mkdirSync(dirPath, { recursive: true });

        if (Array.isArray(value)) {
            value.forEach((file) => {
                fs.writeFileSync(path.join(dirPath, file), '');
            });
        } else {
            createStructure(dirPath, value);
        }
    });
};

createStructure(__dirname, structure);
console.log('Project structure created successfully!');
