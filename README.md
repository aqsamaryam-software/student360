# GU Student Hub

A static, mobile-friendly student portal for the Software Engineering department at Ghazi University, Dera Ghazi Khan.

## Features

- Login interface
- Department overview
- Notes and past-paper catalog
- Faculty and staff directory
- Search and resource filters
- Responsive GitHub Pages-ready layout

## Important

The login is a **static demo** only. It is not secure and must not be used to protect real student records or private documents. Use Firebase Authentication or another secure identity provider for real login.

Faculty and staff entries marked as placeholders must be replaced with verified names and official details. Do not publish private phone numbers or emails without consent.

Past papers and notes should be uploaded only with permission. Add them in `app.js` and link them to real PDF or document URLs.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

The included workflow deploys the repository from the `main` branch. In GitHub repository settings, open **Pages** and set **Source** to **GitHub Actions**.
