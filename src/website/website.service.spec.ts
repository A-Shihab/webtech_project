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

  // Create User
  createUser(user: User) {
    return this.userRepository.save(user);
  }

  // Get Users
  getUsers() {
    return this.userRepository.find();
  }

  // Delete User
  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  // Create Category
  createCategory(category: Category) {
    return this.categoryRepository.save(category);
  }

  // Get Categories
  getCategories() {
    return this.categoryRepository.find();
  }

  // Delete Category
  deleteCategory(id: number) {
    return this.categoryRepository.delete(id);
  }

  // Similarly, add methods for Income, Expense, Budget, Saving, and Report...
  createIncome(income: Income) {
    return this.incomeRepository.save(income);
  }

  getIncomes() {
    return this.incomeRepository.find();
  }

  deleteIncome(id: number) {
    return this.incomeRepository.delete(id);
  }

  // Repeat similarly for Expense, Budget, Saving, Report...
}
