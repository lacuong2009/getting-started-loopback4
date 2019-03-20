import {Application, Binding, Component, CoreBindings, inject} from "@loopback/core";
import {ProviderMap} from "@loopback/core/src/component";
import {Sequelize} from "sequelize-typescript";
import HelloModel from "./models/hello.model";
const database = require('../../config/database.js');

export class AppComponent implements Component {

    /**
     *  @type {ProviderMap}
     */
    providers?: ProviderMap;

    /**
     *  @type {Binding[]}
     */
    bindings?: Binding[];

    /**
     * @type {[]}
     */
    bindServices: any = [];



    constructor(
        @inject(CoreBindings.APPLICATION_INSTANCE)
        private application: Application,
    ) {

        let promise = new Promise(async (resolve, reject) => {
            try {

                return resolve(this);
            } catch (ex) {
                return reject(ex);
            }
        });

        promise.then( async (value) => {
            await this.registerORM();

            await HelloModel.findAll();
        })
    }

    async registerORM() {
        let config: any = database['connections'][database['default']];
        let sequelize = new Sequelize(config);
        sequelize.addModels([__dirname + '/models']);

        this.application.bind('Sequelize').to(sequelize);
    }
}