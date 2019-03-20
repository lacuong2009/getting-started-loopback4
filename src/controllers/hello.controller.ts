// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {
    Request,
    RestBindings,
    post,
    put,
    del,
    requestBody,
    param
} from '@loopback/rest';
import HelloModel from "../models/hello.model";
import {Application, CoreBindings} from "@loopback/core";
import {Sequelize} from "sequelize-typescript";

export class HelloController {
  constructor(
      @inject(RestBindings.Http.REQUEST) private req: Request,
      @inject(CoreBindings.APPLICATION_INSTANCE)
      private application: Application
  ) {}

    @post('hello')
    async store(@requestBody() obj: HelloModel): Promise<any> {
        let sequelize: Sequelize = await this.application.get('Sequelize');
        return await sequelize.transaction( async (t: any) => {
            return await HelloModel.build({
                Name: 'loopback'
            }).save({
                transaction: t
            });
        });

    }
}
