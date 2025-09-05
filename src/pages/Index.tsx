import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [showBooking, setShowBooking] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Гостиница Сталагмит</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('hero')} className="text-gray-900 hover:text-primary transition-colors">Главная</button>
                <button onClick={() => scrollToSection('rooms')} className="text-gray-900 hover:text-primary transition-colors">Номера</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-900 hover:text-primary transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('booking')} className="text-gray-900 hover:text-primary transition-colors">Бронирование</button>
                <button onClick={() => scrollToSection('reviews')} className="text-gray-900 hover:text-primary transition-colors">Отзывы</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-primary transition-colors">О нас</button>
                <button onClick={() => scrollToSection('contacts')} className="text-gray-900 hover:text-primary transition-colors">Контакты</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/img/f83cd81e-5c5b-447b-a748-7225f914d55c.jpg" 
            alt="Лобби отеля" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Добро пожаловать в наш отель
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Классический комфорт и безупречный сервис в самом сердце города
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            onClick={() => scrollToSection('booking')}
          >
            Забронировать номер
          </Button>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши номера</h2>
            <p className="text-xl text-gray-600">Выберите идеальный номер для вашего пребывания</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Стандартный номер",
                price: "5,000₽",
                image: "/img/37d5d55e-db6c-4447-9aae-49d927a60ccf.jpg",
                features: ["Двуспальная кровать", "Ванная комната", "Wi-Fi", "ТВ"]
              },
              {
                title: "Делюкс номер",
                price: "8,000₽",
                image: "/img/37d5d55e-db6c-4447-9aae-49d927a60ccf.jpg",
                features: ["Кровать размера King", "Мини-бар", "Балкон", "Кондиционер"]
              },
              {
                title: "Люкс",
                price: "12,000₽",
                image: "/img/37d5d55e-db6c-4447-9aae-49d927a60ccf.jpg",
                features: ["Гостиная зона", "Джакузи", "Панорамный вид", "Консьерж-сервис"]
              }
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{room.title}</span>
                    <span className="text-primary">{room.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" onClick={() => setShowBooking(true)}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Всё для вашего комфорта и удобства</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Wifi", title: "Бесплатный Wi-Fi", desc: "Высокоскоростной интернет во всех номерах" },
              { icon: "Car", title: "Парковка", desc: "Бесплатная охраняемая парковка" },
              { icon: "Utensils", title: "Ресторан", desc: "Изысканная кухня и room service" },
              { icon: "Dumbbell", title: "Фитнес-центр", desc: "Современный тренажерный зал" },
              { icon: "Waves", title: "SPA-центр", desc: "Релаксация и оздоровительные процедуры" },
              { icon: "Users", title: "Конференц-зал", desc: "Залы для деловых мероприятий" },
              { icon: "Shield", title: "Безопасность", desc: "Круглосуточная охрана" },
              { icon: "Clock", title: "Консьерж", desc: "Помощь в организации досуга" }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Бронирование</h2>
            <p className="text-xl text-gray-600">Выберите даты и забронируйте номер онлайн</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Form Widget */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Быстрое бронирование</h3>
              <div id="WidgetVerticalBlockId" className="min-h-[400px]"></div>
            </Card>
            
            {/* Rooms List Widget */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Доступные номера</h3>
              <div id="WidgetRoomsListId" className="min-h-[400px]"></div>
            </Card>
          </div>

          {/* Mobile Check Availability Button */}
          <div id="WidgetShowCheckAvailabilityButtonForMobileDevicesId"></div>
          
          {/* Fallback contact info */}
          <div className="text-center mt-12 p-6 bg-secondary/10 rounded-lg">
            <p className="text-lg text-gray-700 mb-2">
              Есть вопросы по бронированию?
            </p>
            <p className="text-primary font-semibold text-xl">
              📞 +7 (495) 123-45-67
            </p>
            <p className="text-gray-600 mt-2">
              Или напишите нам на email: booking@hotel-classic.ru
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-secondary/10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы гостей</h2>
            <p className="text-xl text-gray-600">Что говорят наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                rating: 5,
                text: "Превосходный сервис и комфортные номера. Обязательно вернемся снова!",
                date: "15 августа 2024"
              },
              {
                name: "Михаил Иванов",
                rating: 5,
                text: "Отличное расположение, вежливый персонал. Рекомендую всем друзьям.",
                date: "22 июля 2024"
              },
              {
                name: "Елена Сидорова",
                rating: 4,
                text: "Уютная атмосфера и вкусные завтраки. Идеально для семейного отдыха.",
                date: "5 июля 2024"
              }
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="font-semibold text-gray-900">{review.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">О нас</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Наш отель — это место, где классические традиции гостеприимства сочетаются с современными удобствами. 
            Уже более 15 лет мы принимаем гостей со всего мира, предлагая им незабываемый опыт пребывания.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Расположенный в историческом центре города, отель предлагает уникальную возможность погрузиться в 
            атмосферу старины, не отказываясь от современного комфорта. Каждый номер оформлен с особым вниманием 
            к деталям, создавая атмосферу домашнего уюта.
          </p>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-secondary/10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">ул. Центральная, 123, Москва, 101000</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@hotel-classic.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-gray-600">Круглосуточно</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Написать нам</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 border border-gray-300 rounded-md" 
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <Button className="w-full">Отправить</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Гостиница Сталагмит</h3>
          <p className="text-gray-400 mb-8">Классический комфорт в сердце города</p>
          <div className="flex justify-center space-x-6">
            <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
          <Separator className="my-8 bg-gray-700" />
          <p className="text-gray-400">© 2024 Hotel. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;