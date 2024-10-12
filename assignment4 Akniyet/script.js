// Получаем элементы DOM
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const result = document.getElementById('result');
const rollButton = document.getElementById('rollButton');

// Функция для генерации случайного числа от 1 до 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Обработчик события для кнопки
rollButton.addEventListener('click', () => {
  // Генерируем два случайных числа
  const dice1Value = rollDice();
  const dice2Value = rollDice();

  // Обновляем изображения кубиков
  dice1.src = `images/dice${dice1Value}.png`;
  dice2.src = `images/dice${dice2Value}.png`;

  // Выводим результат
  result.textContent = `You rolled ${dice1Value} and ${dice2Value}. Total: ${dice1Value + dice2Value}`;
  
  // Дополнительно: проверка на дубль
  if (dice1Value === dice2Value) {
    result.textContent += ' - You rolled a double!';
  }
});
