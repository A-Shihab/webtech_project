import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WebsiteService } from './website.service';
import { User, Category, Income, Expense, Budget, Saving, Report } from './website.entity';

@Controller('website')
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  // ----------- User Endpoints -----------
  @Post('user')
  createUser(@Body() user: User) {
    return this.websiteService.createUser(user);
  }

  @Get('users')
  getUsers() {
    return this.websiteService.getUsers();
  }

  @Put('user/:id')
  updateUser(@Param('id') id: number, @Body() user: Partial<User>) {
    return this.websiteService.updateUser(id, user);
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: number) {
    return this.websiteService.deleteUser(id);
  }

  // ----------- Category Endpoints -----------
  @Post('category')
  createCategory(@Body() category: Category) {
    return this.websiteService.createCategory(category);
  }

  @Get('categories')
  getCategories() {
    return this.websiteService.getCategories();
  }

  @Put('category/:id')
  updateCategory(@Param('id') id: number, @Body() category: Partial<Category>) {
    return this.websiteService.updateCategory(id, category);
  }

  @Delete('category/:id')
  deleteCategory(@Param('id') id: number) {
    return this.websiteService.deleteCategory(id);
  }

  // ----------- Income Endpoints -----------
  @Post('income')
  createIncome(@Body() income: Income) {
    return this.websiteService.createIncome(income);
  }

  @Get('incomes')
  getIncomes() {
    return this.websiteService.getIncomes();
  }

  @Put('income/:id')
  updateIncome(@Param('id') id: number, @Body() income: Partial<Income>) {
    return this.websiteService.updateIncome(id, income);
  }

  @Delete('income/:id')
  deleteIncome(@Param('id') id: number) {
    return this.websiteService.deleteIncome(id);
  }

  // ----------- Expense Endpoints -----------
  @Post('expense')
  createExpense(@Body() expense: Expense) {
    return this.websiteService.createExpense(expense);
  }

  @Get('expenses')
  getExpenses() {
    return this.websiteService.getExpenses();
  }

  @Put('expense/:id')
  updateExpense(@Param('id') id: number, @Body() expense: Partial<Expense>) {
    return this.websiteService.updateExpense(id, expense);
  }

  @Delete('expense/:id')
  deleteExpense(@Param('id') id: number) {
    return this.websiteService.deleteExpense(id);
  }

  // ----------- Budget, Saving, Report Endpoints (similar pattern) -----------
  @Post('budget')
  createBudget(@Body() budget: Budget) {
    return this.websiteService.createBudget(budget);
  }

  @Get('budgets')
  getBudgets() {
    return this.websiteService.getBudgets();
  }

  @Put('budget/:id')
  updateBudget(@Param('id') id: number, @Body() budget: Partial<Budget>) {
    return this.websiteService.updateBudget(id, budget);
  }

  @Delete('budget/:id')
  deleteBudget(@Param('id') id: number) {
    return this.websiteService.deleteBudget(id);
  }

  @Post('saving')
  createSaving(@Body() saving: Saving) {
    return this.websiteService.createSaving(saving);
  }

  @Get('savings')
  getSavings() {
    return this.websiteService.getSavings();
  }

  @Put('saving/:id')
  updateSaving(@Param('id') id: number, @Body() saving: Partial<Saving>) {
    return this.websiteService.updateSaving(id, saving);
  }

  @Delete('saving/:id')
  deleteSaving(@Param('id') id: number) {
    return this.websiteService.deleteSaving(id);
  }

  @Post('report')
  createReport(@Body() report: Report) {
    return this.websiteService.createReport(report);
  }

  @Get('reports')
  getReports() {
    return this.websiteService.getReports();
  }

  @Put('report/:id')
  updateReport(@Param('id') id: number, @Body() report: Partial<Report>) {
    return this.websiteService.updateReport(id, report);
  }

  @Delete('report/:id')
  deleteReport(@Param('id') id: number) {
    return this.websiteService.deleteReport(id);
  }
}
