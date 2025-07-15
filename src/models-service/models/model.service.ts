import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelService {
  create(createModelDto: any) {
    console.log('createModelDto', createModelDto);
    return 'This action adds a new model';
  }

  findAll() {
    return `This action returns all models`;
  }

  findOne(id: number) {
    console.log('id', id);
    return `This action returns a #id model`;
  }

  update(id: number, updateModelDto: any) {
    console.log('id', id, updateModelDto);
    return `This action updates a #id model`;
  }

  remove(id: number) {
    console.log('id', id);
    return `This action removes a #id model`;
  }
}
