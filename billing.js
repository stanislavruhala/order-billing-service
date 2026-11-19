// Усунуто Stamp Coupling: приймаються лише примітивні параметри city та weightKg
function calculateDeliveryCost(city, weightKg) {
    const baseRate = city === "Ivano-Frankivsk" ? 50.0 : 110.0;
    return baseRate + (weightKg * 12.0);
}

// Усунуто Common Coupling (taxRate передається явно) та Control Coupling (окрема функція)
function processStandardInvoice(amount, city, weightKg, taxRate = 0.20) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = (amount * (1 + taxRate)) + delivery;
    return { status: "PROCESSED", total: Number(total.toFixed(2)) };
}

// Окрема функція для замовлень без податку
function processTaxExemptInvoice(amount, city, weightKg) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = amount + delivery;
    return { status: "TAX_EXEMPT", total: Number(total.toFixed(2)) };
}

module.exports = { calculateDeliveryCost, processStandardInvoice, processTaxExemptInvoice };
