export default {
  header: {
    whitePaper: `White Paper`,
    search: `Buscar dirección, transacción o bloqueo`,
  },
  dashboard: {
    title: `Tablero`,
    emission: `Emisión total`,
    network: `Topología de la red`,
    tps: `TPS máximo`,
    difficulty: `Dificultad`,
    blocks: `Bloques`,
    lastBlock: `Último bloque`,
    microblocks: `Microbloques`,
    pending: `En espera`,
    masterNodes: `Nodos maestros`,
    pow: `PoW`,
    poaTeams: `Equipos de PoA`,
    poaUnits: `Unidades PoA`,
    transactions: `Transacciónes`,
  },
  explorer: {
    title: `Explorer`,
    blocks: {
      title: `Lista de Bloques`,
      height: `Altura`,
      hash: `Hash`,
      microblocks: `Microbloques`,
      prev: `Hash Prev`,
      nonce: `Nonce`,
      miner: `Minero`
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
    title: `Remitir la transacción`,
    public: `Clave pública`,
    private: `Clave privada`,
    receiver: `Aceptador`,
    amount: `Cantidad`,
    send: `Remitir la transacción`,
    change: `Cambiar la cartera`,
    show: `Mostrar`,
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
    title: '¿Cómo funciona?'
  }
}
