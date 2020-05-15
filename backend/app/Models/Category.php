<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Category extends Model
{
    protected $table = 'categories';

    protected $guarded = ['*'];

    const STATUS_PUBLIC = 1; // danh muc duoc cong khai
    const STATUS_PRIVATE = 0; // danh muc bi an di

    const HOME = 1; //hien thi len trang chu

    protected $status = [
        1 => [
            'name' => 'Public',
            'class' => 'label-danger'
        ],
        0 => [
            'name' => 'Private',
            'class' => 'label-default'
        ],
    ];

    //get home product
    protected $home = [
        1 => [
            'name' => 'Public',
            'class' => 'label-primary'
        ],
        0 => [
            'name' => 'Private',
            'class' => 'label-default'
        ],
    ];

    public function getStatus() {
        return Arr::get($this->status, $this->c_active, '[N\A]');
    }

    public function getHome() {
        return Arr::get($this->home, $this->c_home, '[N\A]');
    }

    public function products() {
        return $this->hasMany(Product::class, 'pro_category_id');
    }
}
