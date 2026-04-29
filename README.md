# Node.js eCommerce Application with EJS

A modern eCommerce web application built with Node.js, Express, and EJS templating engine.

## 🚀 Features

- **Product Catalog** - Browse and view products
- **Shopping Cart** - Add/remove items and manage cart
- **Session Management** - User session persistence
- **Responsive UI** - Clean and intuitive user interface
- **Error Handling** - Comprehensive error management
- **Logging** - Request logging middleware
- **Environment Configuration** - Secure environment variable management

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sandeeppaldotnet/Node-js-ecommerce-ejs-prod.git
   cd Node-js-ecommerce-ejs-prod
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment configuration**
   ```bash
   cp .env.example .env
   ```
   
   Or create a `.env` file with your configuration:
   ```
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   npm start
   ```

The application will run on `http://localhost:3000`

## 📁 Project Structure

```
├── app.js                 # Main application entry point
├── package.json          # Project dependencies and scripts
├── config/
│   └── session.js        # Session configuration
├── middlewares/
│   ├── errorHandler.js   # Global error handling middleware
│   └── logger.js         # Request logging middleware
├── routes/
│   └── webRoutes.js      # Application routes
├── services/
│   └── productService.js # Business logic for products
├── views/
│   ├── index.ejs         # Home page
│   ├── product.ejs       # Product details page
│   ├── cart.ejs          # Shopping cart page
│   └── partials/
│       ├── header.ejs    # Header component
│       └── footer.ejs    # Footer component
└── public/               # Static files (CSS, JS, images)
```

## 🔧 Dependencies

- **express** - Web framework
- **ejs** - Templating engine
- **express-session** - Session management
- **axios** - HTTP client
- **dotenv** - Environment variable management

## 📖 Usage

### View Products
Navigate to the home page to browse available products.

### Add to Cart
Click on a product to view details and add items to your shopping cart.

### Manage Cart
View and modify your cart from the cart page before checkout.

## 🚨 Error Handling

The application includes comprehensive error handling through:
- Global error handler middleware (`errorHandler.js`)
- Request logging middleware (`logger.js`)
- Try-catch blocks in services

## 📝 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
SESSION_SECRET=your_session_secret_here
```

### Session Configuration

Session settings are managed in `config/session.js`. Customize session store, timeout, and security options as needed.

## 🔐 Security Considerations

- Keep your `.env` file private (add to `.gitignore`)
- Use secure session secrets in production
- Validate and sanitize user inputs
- Use HTTPS in production environment

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, change the PORT in your `.env` file or specify it when starting:
```bash
PORT=3001 npm start
```

### Module Not Found
Ensure all dependencies are installed:
```bash
npm install
```

### Session Issues
Clear your browser cookies and restart the server if experiencing session problems.

## 📦 Building for Production

1. Set `NODE_ENV=production` in your `.env` file
2. Install dependencies: `npm install --production`
3. Start the server: `npm start`

For deployment, consider using:
- PM2 for process management
- Nginx for reverse proxy
- Docker for containerization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

[Sandeep Pal](https://github.com/sandeeppaldotnet)

## 📞 Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/sandeeppaldotnet/Node-js-ecommerce-ejs-prod/issues).

---

**Happy coding!** 🎉
