<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Rating extends Model
{
    protected $table = 'ratings';
    protected $fillable = [
        'ra_product_id', 'ra_number', 'ra_content', 'ra_user_id'
    ];
    
    public function user() {
        return $this->belongsTo(User::class, 'ra_user_id');
    }

    public function product() {
        return $this->belongsTo(Product::class, 'ra_product_id');
    }
}
