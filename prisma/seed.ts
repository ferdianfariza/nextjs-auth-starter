import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Users
  await prisma.user.createMany({
    data: [
      { username: 'admin', password: 'admin123' },
      { username: 'user1', password: 'password1' },
    ],
  });

  // Create Barang
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

  // Create Masuk
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
        tanggal: new Date('2025-01-02'),
      },
    ],
  });

  // Create Keluar
  await prisma.keluar.createMany({
    data: [
      {
        barangId: barang1.id,
        jumlahKeluar: 20,
        tanggal: new Date('2025-01-05'),
      },
      {
        barangId: barang2.id,
        jumlahKeluar: 50,
        tanggal: new Date('2025-01-06'),
      },
    ],
  });

  console.log('🌱 Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
