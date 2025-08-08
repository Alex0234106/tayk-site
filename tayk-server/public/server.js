const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Отдаём все файлы из папки "public"
app.use(express.static(path.join(__dirname, 'public')));

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`🔥 Сервер запущен: http://localhost:${PORT}`);
});