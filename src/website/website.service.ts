import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Category, Income, Expense, Budget, Saving, Report } from './website.entity';

@Injectable()
export class WebsiteService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
    @InjectRepository(Income) private incomeRepository: Repository<Income>,
    @InjectRepository(Expense) private expenseRepository: Repository<Expense>,
    @InjectRepository(Budget) private budgetRepository: Repository<Budget>,
    @InjectRepository(Saving) private savingRepository: Repository<Saving>,
    @InjectRepository(Report) private reportRepository: Repository<Report>,
  ) {}

  // ----------- User CRUD ----------- 
  createUser(user: User) {
    return this.userRepository.save(user);
  }
  getUsers() {
    return this.userRepository.find();
  }
  updateUser(id: number, user: Partial<User>) {
    return this.userRepository.update(id, user);
  }
  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  // ----------- Category CRUD ----------- 
  createCategory(category: Category) {
    return this.categoryRepository.save(category);
  }
  getCategories() {
    return this.categoryRepository.find();
  }
  updateCategory(id: number, category: Partial<Category>) {
    return this.categoryRepository.update(id, category);
  }
  deleteCategory(id: number) {
    return this.categoryRepository.delete(id);
  }

  // ----------- Income CRUD ----------- 
  createIncome(income: Income) {
    return this.incomeRepository.save(income);
  }
  getIncomes() {
    return this.incomeRepository.find();
  }
  updateIncome(id: number, income: Partial<Income>) {
    return this.incomeRepository.update(id, income);
  }
  deleteIncome(id: number) {
    return this.incomeRepository.delete(id);
  }

  // ----------- Expense CRUD ----------- 
  createExpense(expense: Expense) {
    return this.expenseRepository.save(expense);
  }
  getExpenses() {
    return this.expenseRepository.find();
  }
  updateExpense(id: number, expense: Partial<Expense>) {
    return this.expenseRepository.update(id, expense);
  }
  deleteExpense(id: number) {
    return this.expenseRepository.delete(id);
  }

  // ----------- Budget CRUD ----------- 
  createBudget(budget: Budget) {
    return this.budgetRepository.save(budget);
  }
  getBudgets() {
    return this.budgetRepository.find();
  }
  updateBudget(id: number, budget: Partial<Budget>) {
    return this.budgetRepository.update(id, budget);
  }
  deleteBudget(id: number) {
    return this.budgetRepository.delete(id);
  }

  // ----------- Saving CRUD ----------- 
  createSaving(saving: Saving) {
    return this.savingRepository.save(saving);
  }
  getSavings() {
    return this.savingRepository.find();
  }
  updateSaving(id: number, saving: Partial<Saving>) {
    return this.savingRepository.update(id, saving);
  }
  deleteSaving(id: number) {
    return this.savingRepository.delete(id);
  }

  // ----------- Report CRUD ----------- 
  createReport(report: Report) {
    return this.reportRepository.save(report);
  }
  getReports() {
    return this.reportRepository.find();
  }
  updateReport(id: number, report: Partial<Report>) {
    return this.reportRepository.update(id, report);
  }
  deleteReport(id: number) {
    return this.reportRepository.delete(id);
  }
}
