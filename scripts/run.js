const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners()
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy()
  await waveContract.deployed()

  console.log('Contract deployed to:', waveContract.address)
  console.log('Contract deployed by:', owner.address)

  let waveCount = await waveContract.getTotalSum()

  let waveTxn = await waveContract.purchase()

  waveCount = await waveContract.getTotalSum()

  waveTxn = await waveContract.connect(randomPerson).purchase()

  waveCount = await waveContract.getTotalSum()
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
