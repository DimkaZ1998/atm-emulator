'use strict' ;

let balance = 10000;

while (true) {
    const menu = `
    Добро поаловать в банкомат!
    ваш выбор:
    1. Показать баланс
    2. Снясть средства
    3. Пополнить счет
    4. Выход
    `;

    const choice = prompt(menu);

    switch (choice) {
        case '1':
            alert(`Ваш баланс: ${баланс} ₽`)
            break;
        case '2':
            const amountToWithdraw = Number(prompt('введите сумму для снятия'));
            if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
                alert('Ошибка: Введена некорректная сумма.');
            }else if (amountToWithdraw > balance) {
                alert('Ошибка:недостаточно средств на счете.');
            } else {
                balance -= amountToWithdraw;
                alert('снятие успешно. Ваш Баланс: ${баланс}')
            }

            case '3':
                const amountToDeposit = Number(prompt('Введите сумму для снятия'));
                if (isNaN(amountToDeposit) || amountToDeposit <+0) {
                    alert('Ошибка: введена некорректная сумма.');
                } else {
                    balance =+ amountToDeposit;
                    alert('Счет пополнен. Ваш Баланс: ${balance}');
                }
                break;
            }
        }