export default {
  header: {
    whitePaper: `White Paper`,
    search: `搜索地址，交易或块`,
  },
  dashboard: {
    title: `控制板`,
    emission: `总排放量`,
    network: `网络拓扑结构`,
    tps: `最大TPS`,
    difficulty: `难度`,
    blocks: `区块`,
    lastBlock: `最后`,
    microblocks: `微区块`,
    pending: `待定`,
    masterNodes: `主节点`,
    pow: `工作量证明`,
    poaTeams: `权威证明小组`,
    poaUnits: `权威证明单位`,
    transactions: `交易`,
  },
  explorer: {
    title: `探索者`,
    blocks: {
      title: `块列表`,
      height: `高度`,
      hash: `哈希值`,
      microblocks: `微区块`,
      prev: `上一哈希`,
      nonce: `随机值`,
      miner: `矿工`
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
    title: `发送交易`,
    public: `公钥`,
    private: `私钥`,
    receiver: `接收器`,
    amount: `量`,
    send: `发送交易`,
    change: `换钱包`,
    show: `显示`,
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
    title: '怎么运行的？'
  }
}
