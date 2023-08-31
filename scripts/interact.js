const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {
  const contract = await ethers.getContractAt("Boatxyz", CONTRACT_ADDRESS);

  console.log("Test ! ");
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
