// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import type { LoggerType } from '../logging/log';
import type { ParsedJob } from './types';

export class JobLogger implements LoggerType {
  private id: string;

  private queueType: string;

  public attempt = -1;

  constructor(
    job: Readonly<Pick<ParsedJob<unknown>, 'id' | 'queueType'>>,
    private logger: LoggerType
  ) {
    this.id = job.id;
    this.queueType = job.queueType;
  }

  fatal(...args: ReadonlyArray<unknown>): void {
    this.logger.fatal(this.prefix(), ...args);
  }

  error(...args: ReadonlyArray<unknown>): void {
    this.logger.error(this.prefix(), ...args);
  }

  warn(...args: ReadonlyArray<unknown>): void {
    this.logger.warn(this.prefix(), ...args);
  }

  info(...args: ReadonlyArray<unknown>): void {
    this.logger.info(this.prefix(), ...args);
  }

  debug(...args: ReadonlyArray<unknown>): void {
    this.logger.debug(this.prefix(), ...args);
  }

  trace(...args: ReadonlyArray<unknown>): void {
    this.logger.trace(this.prefix(), ...args);
  }

  private prefix(): string {
    return `${this.queueType} job queue, job ID ${this.id}, attempt ${this.attempt}:`;
  }
}
