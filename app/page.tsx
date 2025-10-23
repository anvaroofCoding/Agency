import AnimatedGradientBackground from '@/components/ui/animated-gradient-background'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/ui/navbar'
import { SparklesCore } from '@/components/ui/sparkles'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import {
	ArrowRight,
	BarChart3,
	Bot,
	Brain,
	CheckCircle,
	Clock,
	Cog,
	DollarSign,
	EyeIcon,
	Github,
	Linkedin,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
	TrendingUp,
	Workflow,
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
	return (
		<div className='min-h-screen bg-black'>
			{/* Navigation Component */}
			<Navbar />

			{/* Hero Section */}
			<section
				id='home'
				className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'
			>
				<div className='container mx-auto px-4'>
					<Card className='w-full  min-h-[500px] bg-black/[0.96] relative overflow-hidden border-none'>
						<div className='lg:block hidden'>
							<Spotlight
								className='-top-40 left-0 md:left-60 md:-top-20 '
								fill='white'
							/>
						</div>

						<div className='flex flex-col lg:flex-row h-full mt-20'>
							<div className='flex-1 lg:hidden relative'>
								<SplineScene
									scene='https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode'
									className='w-full h-full'
								/>
							</div>
							{/* Left content */}
							<div className='flex-1 p-8 relative z-10 flex flex-col justify-center'>
								<h1 className='text-4xl md:text-5xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text'>
									Salom! Men Islom
								</h1>
								<p className='mt-4 text-neutral-300 max-w-lg'>
									Hozirgi kunda raqamli dunyo rivojlanishida hissa qo'shish
									uchun dasturchi bo'lib faoliyat ko'rsatishni xoxlaydigan
									insonman. Mening shaxsiy olamimga kelganingizda juda juda
									xursandman va buning uchun sizga raxmat!
								</p>

								<div className='flex flex-col sm:flex-row gap-4 mt-8'>
									<Button
										size='lg'
										className='bg-white text-black hover:bg-gray-100'
									>
										Men haqimda batafsil
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
									<Button
										size='lg'
										variant='outline'
										className='border-neutral-600 text-neutral-300 hover:bg-white/60 duration-700 bg-transparent'
									>
										Mening qilgan ishlarim
									</Button>
								</div>

								<div className='flex items-center gap-8 text-sm text-neutral-400 mt-6'>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-4 w-4 text-green-400' />
										<span>Damsiz kun</span>
									</div>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-4 w-4 text-green-400' />
										<span>Ishsiz kun</span>
									</div>
								</div>
							</div>

							{/* Right content */}
							<div className='hidden lg:flex flex-1 relative'>
								<SplineScene
									scene='https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode'
									className='w-full h-full'
								/>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Problem & Solution Section */}
			<section id='maxsus' className='py-24 bg-black'>
				<div className='container mx-auto px-4'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='space-y-6'>
							<h2 className='text-3xl md:text-4xl font-bold text-white'>
								Maxsus topshiriq o'tmishdan keladigan bu xatoliklarga nuqta
								qo'ying
							</h2>
							<div className='space-y-4 text-gray-300'>
								<p className='flex items-start gap-3'>
									<span className='text-red-500 mt-1'>✗</span>
									Hech qachon ishlamang
								</p>
								<p className='flex items-start gap-3'>
									<span className='text-red-500 mt-1'>✗</span>
									Hech qachon orzularni aytmang
								</p>
								<p className='flex items-start gap-3'>
									<span className='text-red-500 mt-1'>✗</span>
									Hech qachon yolg'on gapirmang
								</p>
								<p className='flex items-start gap-3'>
									<span className='text-red-500 mt-1'>✗</span>
									Hech qachon bo'lmaydi demang
								</p>
							</div>
						</div>

						<div className='space-y-6'>
							<h3 className='text-2xl font-bold text-white'>
								Maxsus topshiroq foydali yechim
							</h3>
							<div className='space-y-4 text-gray-300'>
								<p className='flex items-start gap-3'>
									<CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
									Yaxshi ko'rgan ishingizni qilsangiz siz hech qachon
									ishlamagansiz siz rivojlangansiz
								</p>
								<p className='flex items-start gap-3'>
									<CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
									Orzularni hech kimga aytmang u qiziq emas. Natijani o'zi
									gapirar
								</p>
								<p className='flex items-start gap-3'>
									<CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
									Yolg'on tuzalmas kasaldek bir kun o'ldiradi, rost so'zlab esa
									davolang
								</p>
								<p className='flex items-start gap-3'>
									<CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
									Hech qachon bo'lmaydi deyish ojiz insoning vazifasi, bo'ladi
									harakat qilsang bu vazifasini siz o'zingizga oling
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id='learn' className='py-24 bg-black'>
				<div className='container mx-auto px-4'>
					<div className='text-center space-y-4 mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-white'>
							Dasturlashni o'rganishingiz mumkin
						</h2>
						<p className='text-xl text-gray-300 max-w-2xl mx-auto'>
							Dasturlashga ilk qadamlarni shu saytlar orqali boshlang. Men ular
							bilan o'rgandim sizga ham buni tavsiya qilib ketish vazifamdir
						</p>
					</div>

					<BentoGrid className='lg:grid-rows-3'>
						<BentoCard
							name='w3schools.com'
							className='lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3'
							background={
								<div className='absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10' />
							}
							Icon={Bot}
							description='W3Schools — bu veb dasturlash va IT texnologiyalarini o‘rganish uchun yaratilgan eng mashhur onlayn o‘quv platformalardan biri bo‘lib, 1998-yilda ishga tushirilgan. Uning asosiy maqsadi foydalanuvchilarga HTML, CSS, JavaScript, Python, SQL, PHP, React kabi dasturlash tillarini soddalashtirilgan tilda, amaliy misollar yordamida o‘rgatishdir. Sayt “Try it Yourself” funksiyasi orqali foydalanuvchiga kiritilgan kodni darhol bajarib ko‘rish imkonini beradi, bu esa o‘rganish jarayonini interaktiv va samarali qiladi. W3Schools’ning afzalligi — murakkab tushunchalarni sodda va bosqichma-bosqich tushuntirishi, o‘rganilgan mavzularni mustahkamlash uchun mashqlar, testlar va sertifikat dasturlarini taklif etishidir. Shu sababli, W3Schools bugungi kunda yangi boshlovchilar va tajribali dasturchilar uchun ham eng qulay o‘quv manba sifatida tanilgan.'
							href='https://www.w3schools.com/'
							cta="O'rganish"
						/>
						<BentoCard
							name='Developer Monzilla'
							className='lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3'
							background={
								<div className='absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10' />
							}
							Icon={Workflow}
							description='Mozilla’ning rasmiy dokumentatsiyasi va o‘quv qo‘llanmasi. HTML, CSS, JavaScript kabi asosiy veb texnologiyalarni chuqur tushuntiradi, testlar va misollar bilan birga.'
							href='https://developer.mozilla.org/'
							cta="O'rganish"
						/>
						<BentoCard
							name='Freecodecamp'
							className='lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4'
							background={
								<div className='absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10' />
							}
							Icon={Cog}
							description='To‘liq bepul interaktiv kurslar, amaliy mashqlar va loyihalar bilan front-end + full-stack yo‘llarini o‘rgatadi.'
							href='https://www.freecodecamp.org/'
							cta="O'rganish"
						/>
						<BentoCard
							name='Frontend Masters'
							className='lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2'
							background={
								<div className='absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10' />
							}
							Icon={Brain}
							description='Mutaxassislar tomonidan chuqur darslar. JavaScript, frameworklar, TypeScript kabi mavzularni qamrab oladi. '
							href='https://frontendmasters.com/'
							cta="O'rganish"
						/>
						<BentoCard
							name='Frontend Practice'
							className='lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4'
							background={
								<div className='absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10' />
							}
							Icon={MessageSquare}
							description='Real kompaniyalar saytlarini qayta yaratish vazifalari orqali frontend tajribasini oshirish uchun platforma. '
							href='https://www.frontendpractice.com/'
							cta="O'rganish"
						/>
					</BentoGrid>
				</div>
			</section>

			{/* Social Proof Section */}
			<section id='testimonials' className='py-24 bg-black'>
				<div className='container mx-auto px-4'>
					<div className='text-center space-y-4 mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-white'>
							Eng yaxshi postlar
						</h2>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<Card className='bg-black/80 backdrop-blur-sm border-white/10'>
							<CardContent className='p-6'>
								<div className='space-y-4'>
									<div className='flex text-yellow-400'>{'★'.repeat(5)}</div>
									<p className='text-gray-300'>
										“Sizning ishingiz — hayotingizning katta qismini egallaydi.
										Haqiqatan ham qoniqish his etishning yagona yo‘li — siz
										ishonadigan buyuk ishni qilishdir. Va buyuk ishni qilishning
										yagona yo‘li — siz bajarayotgan ishni sevishdir. Agar siz
										hali bu ishni topmagan bo‘lsangiz — izlanishda davom eting.
										Toptim deb o‘ylamang. Yurak bilan bog‘liq masalalarda, siz
										topgan paytda bu narsani his qilasiz.” “Men koinotga iz
										qoldirishni istayman. Agar siz bu dunyoda yashayotgan
										bo‘lsangiz, uni o‘zgartirish uchun yashang. Hech kim
										eslamaydigan oddiy odam bo‘lib qolishning ma’nosi yo‘q.”
										“Innovatsiya — bu 1000 ta ‘yo‘q’ dan keyingi ‘ha’dir.”
									</p>
									<div>
										<p className='font-semibold text-white'>Steven Paul Jobs</p>
										<p className='text-sm text-gray-400'>
											Tadbirkor, ixtirochi, dizayner, Apple Inc. kompaniyasining
											hammuassisi
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='bg-black/80 backdrop-blur-sm border-white/10'>
							<CardContent className='p-6'>
								<div className='space-y-4'>
									<div className='flex text-yellow-400'>{'★'.repeat(5)}</div>
									<p className='text-gray-300'>
										“Men biror narsani muhim deb bilsam, muvaffaqiyatsizlik
										ehtimoli qancha bo‘lishidan qat’i nazar — uni qilaman.”
										“Ba’zi odamlar o‘zgarishni yoqtirishmaydi. Ammo agar muqobil
										tanlov — halokat bo‘lsa, o‘zgarish zarur.” “Men kompaniya
										ochish uchun kompaniya ochmayman. Har bir loyiha insoniyat
										kelajagi uchun foydali bo‘lishi kerak.” “Agar siz ertalab
										uyg‘onib, insoniyatni kelajakda yanada yaxshiroq qilishga
										harakat qilsangiz — demak, sizning hayotingiz ma’noli.”
									</p>
									<div>
										<p className='font-semibold text-white'>Elon Reeve Musk</p>
										<p className='text-sm text-gray-400'>
											Muhandis, tadbirkor, ixtirochi, investor.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='bg-black/80 backdrop-blur-sm border-white/10'>
							<CardContent className='p-6'>
								<div className='space-y-4'>
									<div className='flex text-yellow-400'>{'★'.repeat(5)}</div>
									<p className='text-gray-300'>
										“Agar siz olam sirini bilmoqchi bo‘lsangiz — energiya,
										chastota va tebranish haqida o‘ylang.” “Men bugungi kunni
										emas, ertangi kunni o‘ylab ixtiro qilaman. Chunki kelajak —
										meniki.” “Odamlar mening g‘oyalarimni tushunmaydi, lekin bir
										kun ular menga rahmat aytishadi. Chunki men insoniyat uchun
										yashayman, o‘zim uchun emas.” “Men uchun ilm — bu nafaqat
										bilim, balki insoniyatni ozodlikka eltuvchi kuchdir.”
									</p>
									<div>
										<p className='font-semibold text-white'>Nikola Tesla</p>
										<p className='text-sm text-gray-400'>
											Fizik, elektro-mexanik muhandis, ixtirochi.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-24 bg-black' id='about'>
				<div className='container mx-auto px-4'>
					<div className='text-center space-y-4 mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-white'>
							Men haqimda batafsil
						</h2>
						<p className='text-xl text-gray-300 max-w-2xl mx-auto'>
							To'liq ismim Islomjon Anvarov Toxir o'g'li. Toshkent viloyati
							Bekobod shaharda 2005-yili tavallud topganman. Universitetda
							o'qimayman ammo nufuzli universitetga o'qishga kirish uchun
							tayyorlanyapman. Hozirgi Kunda Toshkent Shahar Transport vazirligi
							qoshidagi Toshkent metropoliten DUK da 1-tofifali muhandis
							lavozimida ishlab kelaman. Hayotdagi maqsadim rivoq. Mening eng
							sevimli mashg'ulotim sport. FAANG kampaniyalaridan bittasiga
							2028-yilgacha ishga kirish bu hozirgi orzulardan biri.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='text-center space-y-4'>
							<div className='h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto'>
								<Clock className='h-8 w-8 text-green-400' />
							</div>
							<h3 className='text-2xl font-bold text-white'>80%</h3>
							<p className='text-gray-300'>
								Kunlik vaqtim ish va rivojlanish uchun
							</p>
						</div>

						<div className='text-center space-y-4'>
							<div className='h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto'>
								<DollarSign className='h-8 w-8 text-blue-400' />
							</div>
							<h3 className='text-2xl font-bold text-white'>Aniqlanmagan</h3>
							<p className='text-gray-300'>Daromatim</p>
						</div>

						<div className='text-center space-y-4'>
							<div className='h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto'>
								<BarChart3 className='h-8 w-8 text-purple-400' />
							</div>
							<h3 className='text-2xl font-bold text-white'>40%</h3>
							<p className='text-gray-300'>
								Bu yilgi Start Up loyhaning o'sishi
							</p>
						</div>

						<div className='text-center space-y-4'>
							<div className='h-16 w-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto'>
								<TrendingUp className='h-8 w-8 text-orange-400' />
							</div>
							<h3 className='text-2xl font-bold text-white'>2023-2025</h3>
							<p className='text-gray-300'>Dasturchilik faoliyatim</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section
				id='portfolio'
				className='py-24 bg-gradient-to-b from-gray-900 to-black rounded-t-[500px]'
			>
				<div className='container mx-auto px-6'>
					{/* Title */}
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-extrabold text-white mb-4'>
							Eng sara 3ta portfolio
						</h2>
						<p className='text-gray-400 text-lg max-w-2xl mx-auto'>
							Hozirgi kungacha juda ko'p loyhalar ichidan eng sara va murakkab
							funksiyalar bilan ishlab keladigan loyhalar
						</p>
					</div>

					{/* 3-Step Grid */}
					<div className='grid md:grid-cols-3 gap-12'>
						{/* Step 1 */}
						<div className='text-center space-y-6 group'>
							<div className='relative'>
								<img
									src='/p1.png'
									alt='Consultation'
									className='h-32 w-62 mx-auto drop-shadow-xl'
								/>
								<span className='absolute -top-3 -right-3 bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg'>
									<Link
										target='_blank'
										href={'https://github.com/anvaroofCoding/depo-main'}
									>
										<EyeIcon />
									</Link>
								</span>
							</div>
							<h3 className='text-2xl font-semibold text-white'>ERP sistema</h3>
							<p className='text-gray-400 leading-relaxed px-4'>
								Bu dastur yordamida poyezdlarni nazorat qilish osonlashadi va
								hech qanday yog'ozsiz arxivlari yuritiladi ish reja tuziladi.
							</p>
						</div>

						{/* Step 2 */}
						<div className='text-center space-y-6 group'>
							<div className='relative'>
								<img
									src='/p2.png'
									alt='Design & Code'
									className='h-32 w-62 mx-auto drop-shadow-xl transition-transform'
								/>
								<span className='absolute -top-3 -right-3 bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg'>
									<Link
										target='_blank'
										href={
											'https://github.com/anvaroofCoding/ToshMetroOrginalSite.uz.git'
										}
									>
										<EyeIcon />
									</Link>
								</span>
							</div>
							<h3 className='text-2xl font-semibold text-white'>
								Metropoliten Sayti
							</h3>
							<p className='text-gray-400 leading-relaxed px-4'>
								Ushbu sayt ko'p funksiyalar bilan jihozlangan va metropoliten
								haqida bilmoqchi bo'lgan barcha ma'lumotlar haqida ochiqlab
								beradi
							</p>
						</div>

						{/* Step 3 */}
						<div className='text-center space-y-6 group'>
							<div className='relative'>
								<img
									src='/p3.png'
									alt='Deployment'
									className='h-32 w-62 mx-auto drop-shadow-xl transition-transform'
								/>
								<span className='absolute -top-3 -right-3 bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg'>
									<Link
										target='_blank'
										href={
											'https://github.com/anvaroofCoding/marketing-metro-official.git'
										}
									>
										<EyeIcon />
									</Link>
								</span>
							</div>
							<h3 className='text-2xl font-semibold text-white'>
								ERP Marketing
							</h3>
							<p className='text-gray-400 leading-relaxed px-4'>
								Marketing ishlarini boshqarish dasturi. Ya'ni reklamalar oldi
								sottisi. Ularning hozirgi holati shartnomlar va arxivlarni ham
								boshqarish mumkin
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='relative py-24 overflow-hidden'>
				<AnimatedGradientBackground
					Breathing={true}
					gradientColors={[
						'#0A0A0A',
						'#2979FF',
						'#FF80AB',
						'#FF6D00',
						'#FFD600',
						'#00E676',
						'#3D5AFE',
					]}
					gradientStops={[35, 50, 60, 70, 80, 90, 100]}
				/>
				<div className='relative z-10 container mx-auto px-4 text-center'>
					<div className='max-w-3xl mx-auto space-y-8'>
						<div className='relative h-32 w-full flex flex-col items-center justify-center'>
							<div className='w-full absolute inset-0'>
								<SparklesCore
									id='ctasparticles'
									background='transparent'
									minSize={0.6}
									maxSize={1.4}
									particleDensity={100}
									className='w-full h-full'
									particleColor='#FFFFFF'
									speed={0.8}
								/>
							</div>
							<h2 className='text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20 text-balance'>
								Biz start up tuzmoqdamiz jamoaga qo'shiling
							</h2>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link href={'https://t.me/isamu_web'}>
								<Button
									size='lg'
									variant='secondary'
									className='bg-white text-black hover:bg-gray-100'
								>
									Jamoaga qo'shilish
									<ArrowRight className='ml-2 h-4 w-4' />
								</Button>
							</Link>
							<Link href={'tel:+998947932005'}>
								<Button
									size='lg'
									variant='outline'
									className='border-white text-white hover:bg-white/10 bg-transparent'
								>
									+998 (94) 793-20-05
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer
				id='boglanish'
				className='relative py-20 bg-black border-t border-white/10 overflow-hidden'
			>
				<div className='absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90' />

				<div className='relative z-10 container mx-auto px-4'>
					<div className='grid lg:grid-cols-4 md:grid-cols-2 gap-12'>
						{/* Company Info */}
						<div className='lg:col-span-1 space-y-6'>
							<div className='space-y-4'>
								<h3 className='text-2xl font-bold text-white'>Islom</h3>
								<p className='text-gray-300 leading-relaxed'>
									Eng yaxshi kun bugun. Bugun rivojlanasan bugun harakat qilib
									orzu qilgan insoning o'zing bo'lasan. Hech kim bilan
									solishtirma va hech qachon maqsadlaringni hech kimga aytma.
									Bugunni qadrla davom et...
								</p>
							</div>

							<div className='flex space-x-4'>
								<a
									target='_blank'
									href='https://www.linkedin.com/in/islom-anvar-630706324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
									className='p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300'
								>
									<Linkedin className='h-5 w-5' />
								</a>
								<a
									target='_blank'
									href='https://t.me/isamuDev1'
									className='p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300'
								>
									<Send className='h-5 w-5' />
								</a>
								<a
									target='_blank'
									href='https://github.com/anvaroofCoding'
									className='p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300'
								>
									<Github className='h-5 w-5' />
								</a>
							</div>
						</div>

						{/* Services */}
						<div className='space-y-6'>
							<h4 className='text-lg font-semibold text-white'>Ma'lumotlar</h4>
							<ul className='space-y-3'>
								{[
									{ name: 'Bosh sahifa', link: '#home' },
									{ name: 'Maxsus topshiriq', link: '#maxsus' },
									{ name: "Dasturlashni o'rganish", link: '#learn' },
									{ name: 'Eng yaxshi postlar', link: '#testimonials' },
									{ name: 'Men haqimda batafsil', link: '#about' },
								].map(service => (
									<li key={service.name}>
										<a
											href={service.link}
											className='text-gray-400 hover:text-white transition-colors duration-300 flex items-center group'
										>
											<ArrowRight className='h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
											{service.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div className='space-y-6'>
							<h4 className='text-lg font-semibold text-white'>Maxsus AI</h4>
							<ul className='space-y-3'>
								{[
									{ name: 'v0.app', href: 'https://v0.app/' },
									{ name: 'Grok AI', href: 'https://grok.com/' },
									{ name: 'Kimi AI', href: 'https://www.kimi.com/' },
									{
										name: 'Github Copilot',
										href: 'https://github.com/copilot',
									},
									{ name: 'Chatlyai AI', href: 'https://chatlyai.app/' },
								].map(item => (
									<li key={item.name}>
										<a
											target='_blank'
											href={item.href}
											className='text-gray-400 hover:text-white transition-colors duration-300 flex items-center group'
										>
											<ArrowRight className='h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Contact Info */}
						<div className='space-y-6'>
							<h4 className='text-lg font-semibold text-white'>Aloqa qiling</h4>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3 text-gray-300'>
									<div className='p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg'>
										<Mail className='h-4 w-4' />
									</div>
									<a
										href='mailto:hello@aiagency.com'
										className='hover:text-white transition-colors duration-300'
									>
										islomanvarov05@gmail.com
									</a>
								</div>

								<div className='flex items-center space-x-3 text-gray-300'>
									<div className='p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg'>
										<Phone className='h-4 w-4' />
									</div>
									<a
										href='tel:+998947932005'
										className='hover:text-white transition-colors duration-300'
									>
										+998 (94) 793-20-05
									</a>
								</div>

								<div className='flex items-center space-x-3 text-gray-300'>
									<div className='p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg'>
										<MapPin className='h-4 w-4' />
									</div>
									<span>Bekobod shahar 3-mkr</span>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Section */}
					<div className='border-t border-white/10 mt-16 pt-8'>
						<div className='flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'>
							<p className='text-gray-400 text-center lg:text-left'>
								© 2025 Barcha huquqlar himoyalangan
							</p>

							<div className='flex flex-wrap justify-center lg:justify-end space-x-8'>
								<a
									href='#'
									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'
								>
									Privacy Policy
								</a>
								<a
									href='#'
									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'
								>
									Terms of Service
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
