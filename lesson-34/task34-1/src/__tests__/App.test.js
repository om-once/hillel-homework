import React from 'react';
import { fireEvent, render, screen, act, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
	test('Тест що сторінка має заголовок ToDo List', async () => {
		render(<App />);

		const todoTitle = await screen.findByText('ToDo List');

		expect(todoTitle).toBeInTheDocument();
	});

	test('Тест що у поле для тексту можна ввести як цифри, так і букви', async () => {
		render(<App />);

		const todoName = screen.getByTestId('todo-name');

		await act(async () => {
			fireEvent.change(todoName, { target: { value: '12345' } });
		});
		expect(todoName.value).toMatch(/^\d+$/);

		await act(async () => {
			fireEvent.change(todoName, { target: { value: 'Test' } });
		});
		expect(todoName.value).toMatch(/^[A-Za-z]+$/);

		await act(async () => {
			fireEvent.change(todoName, { target: { value: 'Todo123' } });
		});
		expect(todoName.value).toMatch(/^[A-Za-z0-9]+$/);
	});

	test('Тест що після натискання на кнопку “Додати” без тексту, ви отримаєте помилку', async () => {
		render(<App />);

		const todoAdd = screen.getByTestId('todo-add');

		await act(async () => {
			fireEvent.click(todoAdd);
		});
		expect(screen.getByText('Завдання має містити назву!')).toHaveTextContent(
			'Завдання має містити назву!',
		);
	});
	test('Тест що після вписання тексту, та натискання на “Додати” отримаєте новий елемент у списку з потрібним текстом', async () => {
		render(<App />);

		const todoName = screen.getByTestId('todo-name');
		const todoAdd = screen.getByTestId('todo-add');

		await act(async () => {
			fireEvent.change(todoName, { target: { value: 'Нове завдання' } });
		});

		await act(async () => {
			fireEvent.click(todoAdd);
		});

		const todoItem = screen.getByTestId('todo-item');
		expect(todoItem).toHaveTextContent('Нове завдання');
	});
	test('Тест що зміна статусу завдання додає клас line-through на span після натискання кнопки complete', async () => {
		render(<App />);

		const todoName = screen.getByTestId('todo-name');
		const todoAdd = screen.getByTestId('todo-add');

		await act(async () => {
			fireEvent.change(todoName, { target: { value: 'Нове завдання' } });
			fireEvent.click(todoAdd);
		});

		const todoItems = screen.getAllByTestId('todo-item');
		const lastTodoItem = todoItems[todoItems.length - 1];

		const textSpan = within(lastTodoItem).getByTestId('todo-item-text');
		const completeButton =
			within(lastTodoItem).getByTestId('todo-item-complete');

		expect(textSpan).not.toHaveClass('line-through');

		await act(async () => {
			fireEvent.click(completeButton);
		});

		expect(textSpan).toHaveClass('line-through');

		await act(async () => {
			fireEvent.click(completeButton);
		});

		expect(textSpan).not.toHaveClass('line-through');
	});
});
