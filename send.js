// سكريبت إرسال بيانات النموذج إلى Google Apps Script مباشرة من المتصفح

document.getElementById('Order_Form').addEventListener('submit', function(e) {
  e.preventDefault();
  var submitButton = document.getElementById('submitButton');
  submitButton.disabled = true; // تعطيل الزر لمنع النقرات المتعددة
  submitButton.classList.add('loading'); // إضافة كلاس لإظهار مؤشر التحميل

  var form = e.target;
  var data = new URLSearchParams(new FormData(form)).toString();
  var totalv = form.querySelector('[name="totalv"]').value;

  fetch('https://script.google.com/macros/s/AKfycbzjYIlQI2XEfMMKia32i71HKORURjQMg5Fx5jimLi2R1ywD1lDotu1f6w4UJJDbw3I/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data
  })
  .then(response => {
    if (response.ok) {
      // الانتقال إلى صفحة الشكر مع تمرير السعر الإجمالي
      window.location.href = "thankyou.html?totalv=" + encodeURIComponent(totalv);
    } else {
      alert("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
      submitButton.disabled = false; // إعادة تفعيل الزر عند حدوث خطأ
      submitButton.classList.remove('loading');
    }
  })
  .catch(error => {
    // يمكن هنا تسجيل الخطأ في الكونسول فقط بدون إظهار رسالة للمستخدم
    console.error("خطأ أثناء الإرسال:", error);
    alert("حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.");
    submitButton.disabled = false; // إعادة تفعيل الزر عند حدوث خطأ
    submitButton.classList.remove('loading');
  });
});
