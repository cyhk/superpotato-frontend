# Superpotato (Frontend)

Manage your network and friends by letting superpotato do the job for you! It'll keep track and remind you of when you need to contact your friends and connections.

This project was built by @sugoh with input from @cyhk on the SignUp component. This project is currently work-in-progress.

For mobile, visit [superpotato-mobile](https://github.com/cyhk/superpotato-mobile).

## Getting Started

1. Clone this repo

```
git clone https://github.com/cyhk/superpotato-frontend.git
```

2. cd into the directory, install required packages, then start the app

```
npm install
npm start
```

This will run your app on http://localhost:3000

## App Information

### Component Architecture

```
App
├─┬ Nav
│ └─┬ ModalSignUp (reused in Header, Footer)
│   └── SignUp (reused in Header, Footer)
├─┬ Header
│ └─┬ ModalSignUp (reused in Nav, Footer)
│   └── SignUp (reused in Nav, Footer)
├── Features
├── About
├── FAQ
└─┬ Footer
│ └─┬ ModalSignUp (reused in Nav, Header)
│   └── SignUp (reused in Nav, Header)
```
