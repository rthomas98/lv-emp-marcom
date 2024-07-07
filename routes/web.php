<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/company/about', function () {
    return Inertia::render('Company/About');
})->name('about');

// why us page
Route::get('/company/why-us', function () {
    return Inertia::render('Company/Why');
})->name('why-us');

// Approach page
Route::get('/company/approach', function () {
    return Inertia::render('Company/Approach');
})->name('approach');

Route::get('/company/contact', function () {
    return Inertia::render('Company/Contact');
})->name('contact');

Route::get('/company/partnership', function () {
    return Inertia::render('Company/Partnership');
})->name('partnership');


Route::get('/solutions/solutions-overview', function () {
    return Inertia::render('Solutions/SolutionsOverview');
})->name('solutions-overview');

Route::get('/solutions/back-end-development', function () {
    return Inertia::render('Solutions/BackEndDevelopment');
})->name('back-end-development');

Route::get('/solutions/custom-software-development', function () {
    return Inertia::render('Solutions/CustomSoftwareDevelopment');
})->name('custom-software-development');

Route::get('/solutions/custom-wordpress-development', function () {
    return Inertia::render('Solutions/CustomWordPressDevelopment');
})->name('custom-wordpress-development');

Route::get('/solutions/ecommerce-development', function () {
    return Inertia::render('Solutions/EcommerceDevelopment');
})->name('ecommerce-development');

Route::get('/solutions/front-end-development', function () {
    return Inertia::render('Solutions/FrontEndDevelopment');
})->name('front-end-development');

Route::get('/solutions/hubspot-development', function () {
    return Inertia::render('Solutions/HubSpotDevelopment');
})->name('hubspot-development');

Route::get('/solutions/mvp-development', function () {
    return Inertia::render('Solutions/MvpDevelopment');
})->name('mvp-development');

Route::get('/solutions/progressive-web-development', function () {
    return Inertia::render('Solutions/ProgressiveWebDevelopment');
})->name('progressive-web-development');

Route::get('/solutions/react-native-development', function () {
    return Inertia::render('Solutions/ReactNativeDev');
})->name('react-native-development');

Route::get('/solutions/full-stack-development', function () {
    return Inertia::render('Solutions/FullStackDevelopment');
})->name('full-stack-development');

Route::get('/solutions/software-development-and-design', function () {
    return Inertia::render('Solutions/SoftwareDevDesign');
})->name('software-development-and-design');

Route::get('/services/services-overview', function () {
    return Inertia::render('Services/ServicesOverview');
})->name('software-development-and-design');

Route::get('/services/application-services', function () {
    return Inertia::render('Services/ApplicationServices');
})->name('application-services');

Route::get('/services/devops', function () {
    return Inertia::render('Services/Devops');
})->name('devops');

Route::get('/services/it-consulting', function () {
    return Inertia::render('Services/ItConsulting');
})->name('it-consulting');

Route::get('/services/maintenance-and-support', function () {
    return Inertia::render('Services/MaintenanceAndSupport');
})->name('maintenance-and-support');

Route::get('/services/quality-and-assurance', function () {
    return Inertia::render('Services/AQTest');
})->name('quality-and-assurance');

Route::get('/services/smart-teams', function () {
    return Inertia::render('Services/SmartTeams');
})->name('smart-teams');

Route::get('/services/software-engineering', function () {
    return Inertia::render('Services/SoftwareEngineering');
})->name('software-engineering');

// Industries
Route::get('/industries', function () {
    return Inertia::render('Industries');
})->name('industries');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
})->name('privacy');

Route::get('/terms', function () {
    return Inertia::render('Terms');
})->name('terms');

Route::get('/frequently-asked-questions', function () {
    return Inertia::render('Faqs');
})->name('frequently-asked-questions');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
