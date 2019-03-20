import {AfterCreate, Model} from "sequelize-typescript";
import {Column, CreatedAt, DataType, DeletedAt, Table, UpdatedAt} from "sequelize-typescript";

@Table({
    tableName: 'hello',
    timestamps: true,
    underscored: true
})
export default class HelloModel extends Model<HelloModel> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    Id: number;

    @Column({
        type: DataType.STRING,
    })
    Name: string;

    @CreatedAt
    @Column({
        type: DataType.DATE
    })
    CreatedDate: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE
    })
    UpdatedDate: Date;

    @DeletedAt
    @Column({
        type: DataType.DATE
    })
    DeletedDate: Date;

    // Indexer property to allow additional data
    [prop: string]: any;

    constructor(data?: Partial<HelloModel>) {
        super(data);
    }

    @AfterCreate
    static afterCreated(instance: HelloModel, options: any) {

        if (options.transaction) {
            options.transaction.afterCommit(async () => {
                console.log('test');
            });
        }
    }
}