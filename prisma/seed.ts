import { PrismaClient } from '../prisma/generated/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Create users
  await prisma.user.createMany({
    data: [
      { username: 'admin', password: 'admin123' },
      { username: 'gudang', password: 'gudang123' },
    ],
    skipDuplicates: true,
  });

  // 2. Create barang
  const barang1 = await prisma.barang.create({
    data: {
      kodeBarang: 'BRG001',
      namaBarang: 'Kertas A4',
    },
  });

  const barang2 = await prisma.barang.create({
    data: {
      kodeBarang: 'BRG002',
      namaBarang: 'Pulpen',
    },
  });

  const barang3 = await prisma.barang.create({
    data: {
      kodeBarang: 'BRG003',
      namaBarang: 'Buku Tulis',
    },
  });

  // 3. Create barang masuk
  await prisma.masuk.createMany({
    data: [
      {
        barangId: barang1.id,
        jumlahMasuk: 100,
        tanggal: new Date('2025-01-01'),
      },
      {
        barangId: barang2.id,
        jumlahMasuk: 200,
        tanggal: new Date('2025-01-03'),
      },
      {
        barangId: barang3.id,
        jumlahMasuk: 150,
        tanggal: new Date('2025-01-05'),
      },
    ],
  });

  // 4. Create barang keluar
  await prisma.keluar.createMany({
    data: [
      {
        barangId: barang1.id,
        jumlahKeluar: 20,
        tanggal: new Date('2025-01-10'),
      },
      {
        barangId: barang2.id,
        jumlahKeluar: 50,
        tanggal: new Date('2025-01-12'),
      },
      {
        barangId: barang3.id,
        jumlahKeluar: 30,
        tanggal: new Date('2025-01-15'),
      },
    ],
  });

  console.log('✅ Seed berhasil dimasukkan!');
}

main()
  .catch((err) => {
    console.error('❌ Seed gagal:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
