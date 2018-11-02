export default {
  header: {
    whitePaper: `White Paper`,
    search: `주소, 거래 또는 블록 검색`,
  },
  dashboard: {
    title: `대시보드`,
    emission: `총 발행량`,
    network: `네트워크 토폴로지`,
    tps: `최고 TPS`,
    difficulty: `난이도`,
    blocks: `블록 수`,
    lastBlock: `라스트 블록`,
    microblocks: `마이크로블록 수`,
    pending: `펜딩`,
    masterNodes: `마스터 노드 수`,
    pow: `PoW`,
    poaTeams: `PoA 팀 수`,
    poaUnits: `PoA 유닛 수`,
    transactions: `트랜잭션 수`,
  },
  explorer: {
    title: `익스플로러`,
    blocks: {
      title: `블록 목록`,
      height: `높이`,
      hash: `해시`,
      microblocks: `마이크로 블록`,
      prev: `Prev 해시`,
      nonce: `논스`,
      miner: `마이너`
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
    title: `거래 보내기`,
    public: `공개 키`,
    private: `개인 키`,
    receiver: `리시버`,
    amount: `수량`,
    send: `거래 보내기`,
    change: `지갑 교환`,
    show: `보이다`,
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
    title: '어떻게 작동합니까?'
  }
}
