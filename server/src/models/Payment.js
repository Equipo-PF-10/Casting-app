const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.STRING, // O el tipo de dato apropiado para tu identificador de orden
    allowNull: false,
    unique: true,
  },
  amount: {
    type: DataTypes.FLOAT, // O el tipo de dato apropiado para el monto del pago
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING, // O el tipo de dato apropiado para el estado del pago
    allowNull: false,
  },
  buyerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   mercadoPagoPaymentId: {
    type: DataTypes.STRING,
    allowNull: true, // Puede ser nulo si aún no se ha generado el pago en MercadoPago
    unique: true,
  },
  // URL de retorno después del pago
  returnUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // URL de notificación para recibir actualizaciones de MercadoPago
  notificationUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Agrega más propiedades según tus necesidades
});

// Sincroniza el modelo con la base de datos (opcional, solo si quieres que Sequelize cree la tabla automáticamente)
(async () => {
  try {
    await sequelize.sync();
    console.log('Modelo Payment sincronizado correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelo:', error);
  }
})();}

