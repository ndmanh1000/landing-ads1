import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const People = () => {
  const features = [
    'Hơn 5.000 tài liệu đã được số hóa',
    'Phân loại rõ ràng theo năng lực',
    'Phù hợp nhiều trình độ học sinh',
    'Có thể sử dụng cho: Soạn bài - Ra đề kiểm tra - Bài tập về nhà - Ôn luyện và đánh giá',
    
  ]

  return (
    <section className='pt-32 sm:pb-20 pb-10 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden' id='product'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>
      
      <div className='container relative z-10'>
        <div className='relative rounded-2xl px-8 py-8 bg-white/80 backdrop-blur-sm shadow-2xl border-shine'>
          {/* Animated gradient border */}
          <div className='absolute inset-0 rounded-2xl'>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-[length:200%_100%] animate-gradient-border opacity-75'></div>
            <div className='absolute inset-[2px] rounded-2xl bg-white'></div>
          </div>
          
          {/* Shining light effect */}
          <div className='absolute inset-0 rounded-2xl overflow-hidden pointer-events-none'>
            <div className='absolute inset-0 rounded-2xl border-shine-light'></div>
          </div>
          
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
            {/* Left side - Image */}
            <div className='order-2 lg:order-1 flex'>
              <div className='relative w-full aspect-square lg:aspect-auto lg:h-full'>
                <Image
                  src=''
                  alt='Đào tạo thực tế'
                  width={600}
                  height={600}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

          {/* Right side - Content */}
          <div className='order-1 lg:order-2 flex flex-col gap-3 h-full justify-between'>
            <h2 className='text-3xl lg:text-5xl font-medium text-black'>
             THƯ VIỆN 5.000 CÂU HỎI GỒM NHỮNG GÌ?
            </h2>

            <p className='text-lg lg:text-xl font-semibold text-green-600'>
            Câu hỏi đã được sắp xếp & lưu trữ sẵn, Thầy/Cô không cần nhập lại từ đầu
            </p>

            <ul className='flex flex-col gap-3'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <Icon
                    icon='mdi:check-circle'
                    className='text-green-600 text-xl lg:text-2xl flex-shrink-0 mt-0.5'
                  />
                  <span className='text-base lg:text-lg text-gray-700 leading-relaxed'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <Link href='#'>
                <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base lg:text-lg py-4 px-8 rounded-lg transition duration-300 uppercase'>
                  ĐĂNG KÝ NGAY
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default People
