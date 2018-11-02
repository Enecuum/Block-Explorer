export default {
  header: {
    whitePaper: `White Paper`,
    search: `Search for address, transaction or block`,
  },
  dashboard: {
    title: `Dashboard`,
    emission: `Total emission`,
    network: `Network topology`,
    tps: `Max TPS`,
    difficulty: `Difficulty`,
    blocks: `Blocks`,
    lastBlock: `Last Block`,
    microblocks: `Microblocks`,
    pending: `Pending`,
    masterNodes: `Master Nodes`,
    pow: `PoW`,
    poaTeams: `PoA teams`,
    poaUnits: `PoA units`,
    transactions: `Transactions`,
  },
  explorer: {
    title: `Explorer`,
    blocks: {
      title: `List of Blocks`,
      height: `Height`,
      hash: `Hash`,
      microblocks: `Microblocks`,
      prev: `Prev hash`,
      nonce: `Nonce`,
      miner: `Miner`
    },
    block: {
      title: `Block details`,
      prev: `prev block`,
      copy: `Copy`,
      hash: `Hash`,
      height: `Height`,
      time: `Time`,
      nonce: `Nonce`,
      solver: `Solver`,
      attached: `Microblocks attached`,
      type: `Type`,
      microblocks: `Microblocks in the Block`,
      publisher: `Publisher`,
      amount: `Tx amount  `
    },
    microblock: {
      title: `Microblock details`,
      hash: `Hash`,
      copy: `Copy`,
      block: `Block`,
      publisher: `Publisher`,
      attached: `Tx attached`,
      transactions: `Transactions in the Microblock`,
      from: `From`,
      to: `To`,
      amount: `Amount`
    },
    transaction: {
      title: `Transaction details`,
      hash: `Hash`,
      copy: `Copy`,
      from: `From`,
      to: `To`,
      time: `Time`,
      value: `Value`
    },
    wallet: {
      title: `Wallet`,
      hash: `Hash`,
      balance: `Balance`,
      copy: `Copy`,
      transactions: `Committed transactions`,
    }
  },
  sendTransaction: {
    title: `Send Transaction`,
    public: `Public key`,
    private: `Private key`,
    receiver: `Receiver`,
    amount: `Amount`,
    send: `Send transaction`,
    change: `Change wallet`,
    show: `Show`,
    generate: `Generate`,
    ok: `Ok`,
    close: `Close`,
    modal: `We do not store your key on the server. The key generation is handled on your browser only.
             <br>
             <br>
            Back up your key if you want to reuse in the future. If you lose your key, it cannot be recovered.`,
    errors: {
      empty: `please enter your private key`,
      long: `Private key must be hex and at least 50 characters long`,
      require: `you did not fill out the required fields`,
      receiverFormat: `Receiver must be base58 and at least 41 characters long and no more than 45`,
      amountFormat: `Amount must be an integer, greater than 0 and no more than 100`
    }
  },
  works: {
    title: 'How it works?'
  }
}
