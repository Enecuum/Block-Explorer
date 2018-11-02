export default {
  header: {
    whitePaper: `White Paper`,
    search: `住所、取引またはブロックを検索する`,
  },
  dashboard: {
    title: `ダッシュボード`,
    emission: `総排出量`,
    network: `ネットワークトポロジー`,
    tps: `最大TPS`,
    difficulty: `困難`,
    blocks: `ブロック`,
    lastBlock: `最後のブロック`,
    microblocks: `マイクロブロック`,
    pending: `保留中`,
    masterNodes: `マスターノード`,
    pow: `PoW`,
    poaTeams: `PoAチーム`,
    poaUnits: `PoA単位`,
    transactions: `トランザクション`,
  },
  explorer: {
    title: `冒険者`,
    blocks: {
      title: `ブロックのリスト`,
      height: `高さ`,
      hash: `ハッシュ`,
      microblocks: `マイクロブロック`,
      prev: `前のハッシュ`,
      nonce: `ノンス`,
      miner: `鉱夫`
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
    title: `トランザクションを送信する`,
    public: `公開鍵`,
    private: `秘密鍵`,
    receiver: `受信機`,
    amount: `量`,
    send: `トランザクションを送信する`,
    change: `ウォレットの変更`,
    show: `ショー`,
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
    title: '使い方？'
  }
}
