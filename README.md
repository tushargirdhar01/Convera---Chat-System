# Convera---Chat-System

# 🌅 A Next-Generation Chat Application

A modern, real-time messaging platform built with **Java Spring Boot, MS SQL Server, HTML, CSS, Tailwind CSS, Bootstrap, and Vanilla JavaScript**.

The project is designed as a next-generation alternative to conventional chat applications, combining the simplicity of traditional messaging platforms with an immersive visual experience and privacy-focused communication features.

## ✨ Highlights

* 📱 **Phone-number-based communication**
* 📧 Optional **email-based identity & communication**
* ⚡ **Real-time messaging** using WebSockets
* 🌅 Immersive **scenic sunset chat backgrounds**
* 💬 Transparent, glass-style message boxes with clean white typography
* 🙂 Subtle **Bitmoji-inspired message avatars**
* 👻 **Vanish Mode** for temporary conversations
* 🔖 **Saved Messages** that persist even when vanish mode is enabled
* 🚫 **Blocked Messages inbox** for messages received from blocked users
* 🔕 No notifications or read receipts for blocked conversations
* 🔢 Unread message counters for blocked messages
* ❤️ Message reactions
* ↩️ Reply to messages
* ✏️ Edit and delete messages
* 📌 Pin important messages
* 🔍 Search messages
* ⌨️ Typing indicators
* 🟢 Online / last-seen presence
* 📝 Persistent message drafts
* 🎨 Customizable chat backgrounds and appearance
* 📱 Fully responsive desktop and mobile interface

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Tailwind CSS
* Bootstrap
* Vanilla JavaScript

### Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* REST APIs
* WebSocket / STOMP

### Database

* Microsoft SQL Server (MS SQL)

---


# 🔐 Privacy & Communication Features

## 👻 Vanish Mode

Users can enable **Vanish Mode** for a conversation.

Messages belonging to a vanish session are automatically removed according to the application's vanish lifecycle.

However, messages explicitly saved by the user are preserved.

```text
Vanish Mode
     │
     ▼
Temporary Messages
     │
     ├── Saved → Preserve
     │
     └── Not Saved → Remove
```

---

## 🚫 Blocked Messages

Blocking is designed differently from traditional chat applications.

When a user blocks another person:

* Messages can still technically be sent by the blocked user.
* The blocked user isn't explicitly informed that they have been blocked.
* No notification is generated for the receiver.
* No read receipt is sent.
* Messages don't appear in the normal chat list.
* Messages are placed inside a dedicated **Blocked Messages** section.

Example:

```text
Blocked Messages

John                  (5)
Mike                  (2)
```

The circular number represents the number of unread messages received from the blocked user.

The receiver can manually open the blocked conversation whenever they choose.

---

# 🌅 Immersive Chat Experience

Unlike traditional messaging applications, conversations are designed to feel like they're happening inside an environment rather than on a plain background.

The default experience uses a scenic sunset background with:

* Mountains
* Ocean
* Sky
* Warm sunset lighting
* Subtle atmospheric effects

Messages use translucent containers with white text to maintain readability while allowing the environment to remain visible.

Users can customize their chat appearance and replace the default background.

---

# 🙂 Personalized Message Avatars

Every message can include a subtle character/avatar at the end of the message.

Example:

```text
Are you coming tonight?                    🙂
```

The avatar system is intentionally lightweight rather than relying on a complex 3D avatar engine.

Different expressions can be used to add personality to conversations while keeping the interface clean.

---

# 💬 Core Messaging

The application supports a modern messaging experience including:

* One-to-one conversations
* Real-time message delivery
* Message timestamps
* Sent / Delivered / Read states
* Replies
* Reactions
* Editing
* Deletion
* Message search
* Saved messages
* Pinned messages
* Typing indicators
* Online presence
* Draft preservation

---

# 📱 Responsive Design

The application is designed for:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📲 Tablet

The interface adapts to smaller screens rather than simply scaling down the desktop layout.

---

# 🔒 Security

Security-sensitive operations are handled by the Spring Boot backend.

The project uses:

* Spring Security
* Authentication & authorization
* Password hashing where applicable
* Input validation
* API authorization
* SQL injection protection through JPA/Hibernate
* XSS protection considerations
* Secure session/token handling
* Backend-enforced blocking
* Backend-enforced vanish mode
* Backend-enforced message access control

Users can only access conversations and messages they are authorized to access.

---

# 🚀 Project Goals

This project aims to explore how a modern messaging platform can combine:

**Real-time communication + privacy + personalization + immersive UI**

without sacrificing simplicity.

The focus is not only on adding more features, but on creating small interactions that make the application feel substantially different from conventional chat platforms.

---

## 📂 Planned Enhancements

Future iterations may include:

* 👥 Group conversations
* 📎 Advanced file sharing
* 🎙️ Voice messages
* 📹 Voice/video calling
* 🔐 End-to-end encryption
* 🤖 AI-assisted conversations
* 🧠 Smart message organization
* 🎨 More dynamic environments
* 🧑‍🎨 Expanded avatar customization
* 🔔 Advanced notification controls

---

## 🤝 Contributing

Contributions, suggestions, and feature ideas are welcome.

If you find a bug or have an idea that could improve the application, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is intended for learning, experimentation, and development purposes.

