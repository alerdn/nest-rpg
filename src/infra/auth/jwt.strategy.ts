import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import z from 'zod';
import { Env } from '../env';
import { Injectable } from '@nestjs/common';

const TokenPayloadSchema = z.object({
  userId: z.string(),
});

export type TokenPayload = z.infer<typeof TokenPayloadSchema>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService<Env, true>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>('JWT_SECRET'),
    });
  }

  validate(payload: TokenPayload): unknown {
    return TokenPayloadSchema.parse(payload);
  }
}
