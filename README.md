# Student 360

Student 360 is the student portal for the Computer Science and Information Technology department at Ghazi University, Dera Ghazi Khan.

## Features

- Ghazi University and Student 360 branding
- Student sign-in interface
- Department overview
- Notes and past-paper catalog
- Faculty and staff directory
- Department programs, leadership and contacts
- Search, resource filters and responsive layout

## Connect real university data

The interface can be deployed on GitHub Pages, but real student accounts and records must be connected to a hosted backend before university use. A practical low-cost setup is:

1. Create a Supabase project using its free tier.
2. Enable email/password authentication, or configure the university email domain.
3. Create database tables for profiles, programs, faculty, resources and announcements.
4. Enable Row Level Security and write policies so students can only read permitted records.
5. Replace the client-side sign-in handler in `app.js` with Supabase Auth and load records through the Supabase client.
6. Ask Ghazi University IT to approve the data model, account rules, backups and privacy policy before importing real student data.

Firebase Authentication and Firestore are another suitable free-tier option. GitHub Student Developer Pack benefits may help with hosting and developer services, but they do not replace university approval, secure authentication or database rules.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

The included workflow deploys the repository from the `main` branch. In repository settings, open **Pages** and set **Source** to **GitHub Actions**. Keep secrets such as Supabase keys in repository/environment configuration; never commit service-role keys.

Faculty, staff and student data should only be published with university authorization and consent.
