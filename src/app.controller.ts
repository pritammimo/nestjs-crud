import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { data, ReportType } from 'src/data';
@Controller('report/:type')
export class AppController {
  @Get()
  getIncomeReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }
  @Get(':id')
  getIncomeReportById() {
    return {};
  }
  @Post()
  createReport() {
    return 'Created';
  }
  @Put(':id')
  updateReport() {
    return 'Updated';
  }
  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}
