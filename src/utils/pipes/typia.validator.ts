import { HttpException, HttpStatus } from '@nestjs/common';

export const typia_validator = (
  validator: (structure: any) => any,
  structure: any,
  message: string
) => {
  const result = validator(structure);
  if (!result.success) {
    throw new HttpException(
      {
        message: message,
        error: result.errors,
        reason: 0,
      },
      HttpStatus.BAD_REQUEST
    );
  }
  return result;
};