function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

// Create Bank objects
const yesBank = new Bank("Yes Bank", "Pune", "YESB0000123", "YB001");
const sbiBank = new Bank("SBI Bank", "Mumbai", "SBIN0000456", "SB002");
const mahBank = new Bank("Maharashtra Bank", "Nagpur", "MAHB0000789", "MB003");
const axisBank = new Bank("Axis Bank", "Bangalore", "UTIB0000999", "AX004");

// Log each bank's details
console.log(`Bank Details: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`Bank Details: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`Bank Details: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`Bank Details: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

// Add prototype properties
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

// Log openTime and closeTime for sbiBank
console.log(`SBI Bank Timings: Opens at ${sbiBank.openTime}, Closes at ${sbiBank.closeTime}`);

// Log bankName and closeTime for axisBank
console.log(`Axis Bank: ${axisBank.bankName}, Closes at: ${axisBank.closeTime}`);

// Log bankName, branchCode and openTime for yesBank
console.log(`Yes Bank: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Opens at: ${yesBank.openTime}`);
