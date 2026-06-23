
let productName: string = "Mechanical Keyboard";
let pricePerUnit: number = 1200;
let quantity: number = 1;
let isMember: boolean = false;

let totalPrice: number = pricePerUnit * quantity;

let hasDiscount: boolean = totalPrice > 1000 || isMember;


let discountAmount: number = hasDiscount ? totalPrice * 0.10 : 0;
let finalPrice: number = totalPrice - discountAmount;

console.log("========== รายงานสรุปการซื้อสินค้า ==========");
console.log("สินค้าที่ซื้อ: %s (จำนวน %d ชิ้น)", productName, quantity);
console.log("ราคารวมทั้งหมด: %d บาท", totalPrice);
console.log("ได้รับส่วนลด 10% หรือไม่: %d", hasDiscount);
console.log("ราคาที่ต้องจ่ายจริง: %d บาท", finalPrice);
console.log("=============================================");