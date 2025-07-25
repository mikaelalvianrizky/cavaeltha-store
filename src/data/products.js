// src/data/products.js

export const products = [
  {
    id: 1,
    category: 'Streaming',
    name: 'Netflix',
    plans: [
      {
        title: '1 Profile 1 User',
        options: [
          { duration: '1 hari', price: '3.000' },
          { duration: '3 hari', price: '7.000' },
          { duration: '7 hari', price: '15.000' },
          { duration: '14 hari', price: '22.000' },
          { duration: '20 hari', price: '28.000' },
          { duration: '1 bulan', price: '31.000' },
          { duration: '2 bulan', price: '55.000' },
          { duration: '3 bulan', price: '83.000' },
        ],
      },
      {
        title: 'Semi Private',
        options: [
          { duration: '1 bulan', price: '39.000' },
          { duration: '2 bulan', price: '58.000' },
          { duration: '3 bulan', price: '97.000' },
        ],
      },
    ],
    rules: [
      'Dilarang mengubah email/password.',
      'Dilarang mengubah plan langganan.',
      'Maksimal login di 1 device.',
      'Profile dapat diberi PIN.',
    ],
  },
  {
    id: 2,
    category: 'Streaming',
    name: 'IQIYI',
    plans: [
      {
        title: 'Sharing',
        options: [
          { duration: '1 hari', price: '2.000' },
          { duration: '3 hari', price: '5.000' },
          { duration: '7 hari', price: '9.000' },
          { duration: '14 hari', price: '11.000' },
          { duration: '20 hari', price: '13.000' },
          { duration: '1 bulan', price: '15.000' },
        ],
      },
      {
        title: 'Private',
        options: [
          { duration: '1 bulan', price: '31.000' },
          { duration: '3 bulan', price: '86.000' },
          { duration: '1 tahun', price: '435.000' },
        ],
      },
    ],
    rules: [
      'Akun dari seller.',
      'Hanya untuk 1 user & 1 device.',
      'Tidak boleh share akun.',
      'Full garansi.',
    ],
  },
   // You can add more products here (WeTV, Viu, etc.)
];

export const categories = ["Streaming", "Music", "Edit", "Game", "Pulsa & E-Wallet"];