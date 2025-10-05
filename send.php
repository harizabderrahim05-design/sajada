<?php
// رابط Google Apps Script Web App الخاص بك
$script_url = "https://script.google.com/macros/s/AKfycbzjYIlQI2XEfMMKia32i71HKORURjQMg5Fx5jimLi2R1ywD1lDotu1f6w4UJJDbw3I/exec";

// بيانات النموذج
$data = array(
    "fullname"    => $_POST['fullname'],
    "bill_phonee" => $_POST['bill_phonee'],
    "bill_state"  => $_POST['bill_state'],
    "bill_commune"=> $_POST['bill_commune'],
    "price"       => $_POST['price'],
    "totalv"      => $_POST['totalv'],
    "produc"      => $_POST['produc'],
    "urrl"        => $_POST['urrl'],
    "shiph"       => $_POST['shiph']
    // أضف أي حقول أخرى حسب الحاجة
);

// إعداد الطلب
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ),
);

$context  = stream_context_create($options);
$result = file_get_contents($script_url, false, $context);

// يمكنك معالجة النتيجة هنا (مثلاً إعادة توجيه أو رسالة نجاح)
if ($result === FALSE) {
    // فشل الإرسال
    echo "حدث خطأ أثناء إرسال الطلب.";
} else {
    // نجاح الإرسال
    echo "تم إرسال الطلب بنجاح!";
}
?>
