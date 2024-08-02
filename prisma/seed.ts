import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: 'wongsa2544@gmail.com',
            first_name: 'Wongsadhorn',
            last_name: 'Payungsakul',
            password: '$2y$10$NT4dY67qw9IPc4Xb9VPTguzg2hOVZbtDHMN34X6QFo767E1XeVoXS',
            birthday: new Date("2001-05-19"),
            phone_number: '081-1234567',
            detail_adress: "169 Moo 8 Jarookkwea villege",
            role: 'admin'
        }
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })