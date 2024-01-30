const { Model, DataTypes, Sequelize } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customer.model')

const ORDER_TABLE = 'orders';

const OrderSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    customerId:{
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CUSTOMER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    total:{
        type: DataTypes.VIRTUAL,
        get(){
            if( this.items.length > 0){
                return this.items.reduce((total,item)=>{
                    return total + (item.price * item.OrderProduct.amount)
                },0)
            }
            return 0
        }
    }
}

class Order extends Model {
    static associate(models) {
        this.belongsTo(models.Customer, {
            as: 'customer',
        })
        this.belongsToMany(models.Product,{
            //Se especifica atraves de que tabla intermedia se va a realizar la relacion de N:N
            as: 'items', //Como quiero que se llame la relacion
            through: models.OrderProduct,
            foreignKey: 'orderId', //La clave foranea de la tabla intermedia que hace referencia a este modelo(Order)
            otherKey: 'productId', //La clave foranea de la tabla intermedia que hace referencia al otro modelo(Product)
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order', //La forma en la que ingresamos a su modelo
            timestamps: false
        }
    }
}

module.exports = {Order, OrderSchema, ORDER_TABLE}