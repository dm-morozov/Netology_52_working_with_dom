[![Build status](https://ci.appveyor.com/api/projects/status/kcse9hhq8gnyxrv0?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-52-working-with-dom)
![CI](https://github.com/dm-morozov/Netology_52_working_with_dom/actions/workflows/web.yaml/badge.svg)
![Netology](https://img.shields.io/badge/TypeScript-JavaScript-blue)

# 🧾 [Домашнее задание к занятию "2. DOM" — Перемещение элемента](./README_for_Netology.md)

---

### Перемещение элемента

#### Легенда

Вы решили развлечься и реализовать некое подобие игры, где гномы (или другие существа), выскакивают из "отверстий" и по ним нужно бить молотком:

![](./src/img/preview.png)


#### Описание

Соберите инфраструктуру проекта на базе Webpack, ESLint, Babel, Jest, Webpack Dev Server.

Поскольку мы более гуманны, вам нужно реализовать лишь первую часть этой игры - перемещение объекта в DOM Tree.

Для этого самостоятельно разработайте игровое поле 4x4 и персонажа в виде картинки `img` (при загрузке страницы должен программно генерироваться и ставиться в рандомную позицию внутри игрового поля). С помощью функции `setInterval` запланируйте перемещение существующего объекта `img` в другое поле (алгоритм - рандомное перемещение, без перемещения в то же самое поле).

Для картинки персонажа используйте следующую:

![](./src/img/goblin.png)

Важно: не используйте `removeChild`! Проверьте, что будет, если `Node` изменить родителя.

Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через CI.

**В качестве результата пришлите проверяющему ссылку на ваш GitHub-проект. Не забудьте установить бейджик сборки.**

---

### 🌐 Демо:

Доступно по адресу:  
👉 [https://dm-morozov.github.io/Netology_52_working_with_dom/](https://dm-morozov.github.io/Netology_52_working_with_dom/)

---

## 📧 Контакты

Если возникнут вопросы, пишите:

* ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
* ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
* ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)
